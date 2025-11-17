import type { Theme } from '../../lib/types'

// 读取当前目录下的所有主题 TS 文件（排除 index.ts / types.ts）
const modules = import.meta.glob('./*.ts', { eager: true })

const themes: Array<Theme & { category: string }> = []

const collect = (mods: Record<string, any>, category: string) => {
  Object.entries(mods).forEach(([path, mod]) => {
    if (path.endsWith('index.ts') || path.endsWith('types.ts')) return
    Object.values(mod as Record<string, any>).forEach((val) => {
      if (val && typeof val === 'object' && 'id' in val && 'css' in val) {
        themes.push({ ...(val as Theme), category })
      }
    })
  })
}

const modulesRoot = import.meta.glob('./*.ts', { eager: true })
const modulesChinese = import.meta.glob('./chineseStyle/*.ts', { eager: true })
const modulesOthers = import.meta.glob('./others/*.ts', { eager: true })

collect(modulesRoot, 'root')
collect(modulesChinese, 'chineseStyle')
collect(modulesOthers, 'others')

export { themes }