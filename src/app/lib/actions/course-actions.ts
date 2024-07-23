"use server"

import { createWriteStream } from "fs"
import { InputCourse, addCourse, addModule, updateCourseById, InputModule, getAllCourses, AddActionState } from "../api"
import { redirect } from "next/navigation"

export const handleAdd = async (prev: unknown, data: FormData): Promise<AddActionState> => {
   const name = data.get('name') as string
   const price = data.get('price') as string
   const duration = data.get('duration') as string
   const photo = data.get('cover') as File

   if (!name || !price || !duration || photo.size===0) {
      return {
         message: "Please fill all the fields",
         values: { name, price, duration, photo }
      }
   }

   if (isNaN(Number(price))) {
      return {
         message: "Price must be a number",
         values: { name, price, duration, photo }
      }
   }

   if (isNaN(Number(duration))) {
      return {
         message: "Duration must be a number",
         values: { name, price, duration, photo }
      }
   }

   const courses = await getAllCourses()
   if (courses.some(course => course.name === name)) {
      return {
         message: "Please choose another name for the course",
         values: { name, price, duration, photo }
      }
   }

   let extension = photo.type.split("/").at(-1)
   const filename = Date.now() + "." + extension

   const stream = createWriteStream("public/images/" + filename)

   const bufferedImage = await photo.arrayBuffer()

   stream.write(Buffer.from(bufferedImage))

   let course: InputCourse = {
      name,
      price: +price,
      duration: +duration,
      cover: 'images/' + filename
   }

   await addCourse(course)
   redirect("/courses")
}

export const handleUpdate = async (id: number, data: FormData) => {
   const course: Partial<InputCourse> = {
      name: data.get("name") as string,
      price: +(data.get("price") as string),
      duration: +(data.get('duration') as string)
   }

   const photo = data.get('cover') as File
   if (photo.size > 0) {
      let extension = photo.type.split("/").at(-1)
      const filename = Date.now() + "." + extension

      const stream = createWriteStream("public/images/" + filename)

      const bufferedImage = await photo.arrayBuffer()
      course.cover = 'images/' + filename
      stream.write(Buffer.from(bufferedImage))
   }

   await updateCourseById(id, course)
   redirect("/courses")
}

export const handleAddModule = async (data: FormData) => {
   const module: InputModule = {
      title: data.get('title') as string,
      duration: +(data.get('duration') as string),
      courseId: +(data.get('courseId') as string),
   }

   await addModule(module)
   redirect("/courses")
}
