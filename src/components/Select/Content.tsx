'use client'
import * as SelectRadix from '@radix-ui/react-select'
import * as ScrollArea from '@radix-ui/react-scroll-area'

type ContentProps = SelectRadix.SelectContentProps

export function Content({ children, ...rest }: ContentProps) {
  return (
    <SelectRadix.Portal>
      <SelectRadix.Content
        side="bottom"
        position="popper"
        sideOffset={6}
        className="z-40 max-h-[--radix-select-content-available-height] w-[--radix-select-trigger-width] animate-slideDownAndFade overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
        {...rest}
      >
        <ScrollArea.Root type="auto" style={{ overflowY: undefined }}>
          <SelectRadix.Viewport
            asChild
            style={{
              maxHeight: '300px',
            }}
          >
            <ScrollArea.Viewport style={{ overflowY: undefined }}>
              {children}
            </ScrollArea.Viewport>
          </SelectRadix.Viewport>
          <ScrollArea.Scrollbar
            orientation="vertical"
            className="w-1 bg-zinc-200"
          >
            <ScrollArea.Thumb className="rounded-md bg-zinc-300" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </SelectRadix.Content>
    </SelectRadix.Portal>
  )
}
