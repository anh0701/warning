
import { chapters } from '../../../data/chapters/chapters'
import type { Chapter } from '../types/chapter.types'

export function getAllChapters(): Chapter[] {
  return chapters
}

export function getChapterById(id: string): Chapter | undefined {
  return chapters.find((chapter) => chapter.id === id)
}

export function getAvailableChapters(): Chapter[] {
  return chapters.filter((chapter) => chapter.status === 'available')
}
