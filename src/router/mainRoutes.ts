import { createElement, lazy, LazyExoticComponent, MemoExoticComponent } from 'react'
import { Redirect } from 'react-router-dom'

const NotFound = lazy(() => import('@/pages/404'))
const HelloWorld = lazy(() => import('@/pages/hello-world'))

export interface RouterItem {
  key?: string | number
  path: string
  component?: LazyExoticComponent<MemoExoticComponent<() => JSX.Element>>
  exact?: boolean
  strict?: boolean
  meta?: {
    auth?: boolean
    [key:string]: any
  }
  render?: (...r:any) => JSX.Element
}


const routes: RouterItem[] = [
  {
    path: '/',
    exact: true,
    render: () => (
      createElement(Redirect, {
        to: "/hello"
      })
    )
  },
  {
    path: '/hello',
    component: HelloWorld,
  },
  {
    path: '*',
    component: NotFound
  }
]

export default routes