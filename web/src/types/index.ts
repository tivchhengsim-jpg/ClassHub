
export type UserRole = 'student' | 'teacher'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string  //profile picture 
  bio?: string
}

export type ClassMode = 'online' | 'in-person'

export type ClassStatus = 'draft' | 'upcoming' | 'ongoing' | 'completed' | 'cancelled'

export interface Class {
  id: string
  teacherId: string
  title: string
  description: string
  category: string
  price: number
  priceUnit: 'month' | 'course'
  mode: ClassMode
  location?: string
  startDate: string
  endDate: string
  schedule: string
  capacity: number
  registeredCount: number //check later 
  image?: string      // the poster of class 
  status: ClassStatus
}

export interface Registration {
  id: string
  studentId: string
  classId: string
  registeredAt: string
  status: 'active' | 'cancelled'
}

export interface Review {
  id: string
  studentId: string
  classId: string
  classRating: number
  teacherRating: number
  comment: string
  createdAt: string
}
