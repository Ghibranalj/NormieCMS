// import { rootPath as root } from 'electron-root-path';

const platform = window.require('os').platform
const isDev = window.require('electron-is-dev')
const path = window.require('path')
const process = window.require('process')

function getPlatform(): string {
  if (platform() === 'darwin') return 'mac'

  if (platform() === 'win32') return 'win'

  if (platform() === 'linux') return 'linux'

  return 'unknown'
}

export default function GetBinary(name: string): string {
  const root = process.cwd()
  const platform = getPlatform()
  const binariesPath = !isDev // the path to a bundled electron app.
    ? path.join(root, './Binaries')
    : path.join(root, './binaries', platform)

  const extension = platform === 'win' ? '.exe' : ''
  return path.resolve(binariesPath, name + extension)
}
