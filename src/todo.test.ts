/* eslint-disable @typescript-eslint/no-explicit-any */
import { ToDoList } from './TodoList'

const anyTask = {
  title: 'any_title',
  description: 'any_description',
  targetDate: '01/01/2025',
  type: 'any_type',
  priority: '1',
  subTasks: []
}

describe('ToDoList', () => {
  describe('Testing add', () => {
    test('should add a new task to the list', () => {
      const todoInstance = new ToDoList()
      todoInstance.add(anyTask)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([anyTask])
    })

    test('should add a valid tasks', () => {
      const todoInstance = new ToDoList()
      const invalidValue: any = {
        invalidField: 'invalidValue'
      }
      todoInstance.add(invalidValue)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([])
    })
  })

  describe('Testing updateTask', () => {
    test('should update an existent task', () => {
      const todoInstance = new ToDoList()
      todoInstance.add(anyTask)
      let updatedTask = anyTask
      updatedTask.description = "Description updated" 
      todoInstance.updateTask(0,updatedTask)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([updatedTask])
    })
  })

  describe('Testing removeTask', () => {
    test('should remove an existent task', () => {
      const todoInstance = new ToDoList()
      todoInstance.add(anyTask)
      todoInstance.removeTask(0)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([])
    })
  })
})
