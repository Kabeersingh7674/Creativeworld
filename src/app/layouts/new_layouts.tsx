"use client"

import { Panel } from "@/app/interface/panel"
import { pick } from "@/lib/pick"
import { Grid } from "@/app/interface/grid"

export function Layout1() {
  return (
    <Grid className="grid-cols-2 grid-rows-4">
      <div className="bg-stone-100">
        <Panel
          panel={0}
          width={1024}
          height={768}
        />
      </div>
      <div className="bg-zinc-100 row-span-2">
        <Panel
          panel={1}
          width={512}
          height={1024}
        />
      </div>
      <div className="bg-gray-100 row-span-2 col-span-1">
        <Panel
          panel={2}
          width={512}
          height={1024}
        />
      </div>
      <div className="bg-slate-100">
        <Panel
          panel={3}
          width={1024}
          height={768}
        />
      </div>
      <div className="bg-slate-100 row-span-1 col-span-2">
        <Panel
          panel={4}
          width={1024}
          height={768}
        />
      </div>
    </Grid>
  )
}

export function Layout2() {
  return (
    <Grid className="grid-cols-2 grid-rows-3">
      <div className="bg-gray-100 row-span-2 col-span-1">
        <Panel
          panel={0}
          width={768}
          height={1024}
        />
      </div>
      <div className="bg-gray-100 row-span-1 col-span-1">
        <Panel
          panel={1}
          width={1024}
          height={1024}
        />
      </div>
      <div className="bg-slate-100">
        <Panel
          panel={2}
          width={1024}
          height={768}
        />
      </div>
      <div className="bg-stone-100">
        <Panel
          panel={3}
          width={1024}
          height={768}
        />
      </div>
      <div className="bg-zinc-100 row-span-1 col-span-1">
        <Panel
          panel={4}
          width={1024}
          height={768}
        />
      </div>
    </Grid>
  )
}

export function Layout3() {
  return (
    <Grid className="grid-cols-5 grid-rows-2">
      <div className="bg-zinc-100 col-span-3">
        <Panel
          panel={0}
          width={1024}
          height={1024}
        />
      </div>
      <div className="bg-gray-100 col-span-2 row-span-1">
        <Panel
          panel={1}
          width={512}
          height={1024}
        />
      </div>
      <div className="bg-gray-100 col-span-2 row-span-1">
        <Panel
          panel={2}
          width={512}
          height={1024}
        />
      </div>
      <div className="col-span-3 grid grid-cols-2 gap-2">
        <div className="bg-stone-100">
          <Panel
            panel={3}
            width={512}
            height={1024}
          />
        </div>
        <div className="bg-slate-100">
          <Panel
            panel={4}
            width={512}
            height={1024}
          />
        </div>
      </div>
    </Grid>
  )
}

export function Layout4() {
  return (
    <Grid className="grid-cols-2 grid-rows-3">
      <div className="bg-slate-100 row-span-2">
        <Panel
          panel={0}
          width={768}
          height={1024}
        />
      </div>
      <div className="bg-gray-100 row-span-1 col-span-1">
        <Panel
          panel={1}
          width={1024}
          height={768}
        />
      </div>
      <div className="bg-zinc-100 row-span-2">
        <Panel
          panel={2}
          width={1024}
          height={768}
        />
      </div>
      <div className="bg-stone-100">
        <Panel
          panel={3}
          width={768}
          height={1024}
        />
      </div>
    </Grid>
  )
}


export function Layout5() {
  return (
    <Grid className="grid-cols-3 grid-rows-3">
      <div className="bg-zinc-100 col-span-2 row-span-1">
        <Panel
          panel={0}
          width={1024}
          height={512}
        />
      </div>
      <div className="bg-zinc-100 col-span-1 row-span-1">
        <Panel
          panel={1}
          width={1024}
          height={768}
        />
      </div>
      <div className="bg-stone-100 row-span-1 col-span-1">
        <Panel
          panel={2}
          width={768}
          height={1024}
        />
      </div>
      <div className="bg-slate-100 row-span-1 col-span-2">
        <Panel
          panel={3}
          width={1024}
          height={768}
        />
      </div>
      <div className="bg-slate-100 row-span-1 col-span-3">
        <Panel
          panel={4}
          width={1024}
          height={1024}
        />
      </div>
    </Grid>
  )
}

export function Layout6() {
  return (
    <Grid className="grid-cols-3 grid-rows-3">
      <div className="bg-zinc-100 col-span-2 row-span-1">
        <Panel
          panel={0}
          width={1024}
          height={512}
        />
      </div>
      <div className="bg-zinc-100 col-span-1 row-span-1">
        <Panel
          panel={1}
          width={768}
          height={1024}
        />
      </div>
      <div className="bg-stone-100 row-span-1 col-span-1">
        <Panel
          panel={2}
          width={768}
          height={1024}
        />
      </div>
      <div className="bg-slate-100 row-span-2 col-span-2">
        <Panel
          panel={3}
          width={1024}
          height={1024}
        />
      </div>
      <div className="bg-slate-100 row-span-1 col-span-1">
        <Panel
          panel={3}
          width={768}
          height={1024}
        />
      </div>
    </Grid>
  )
}

// export const layouts = { Layout1, Layout2, Layout3, Layout4, Layout5, Layout6 }
export const allLayouts = { 
   // Layout1, 
   // Layout2,
  //  Layout3,
  // Layout4,
   Layout5,
  // Layout6 
 }

export type LayoutName = keyof typeof allLayouts 

export function getRandomLayoutName(): LayoutName {
  return pick(Object.keys(allLayouts) as LayoutName[]) as LayoutName
}

export function getRandomLayoutNames(): LayoutName[] {
  return Object.keys(allLayouts).sort(() => Math.random() - 0.5) as LayoutName[]
}