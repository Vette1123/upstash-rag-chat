import { Bot, User } from 'lucide-react'

import { cn } from '@/lib/utils'

interface MessageProps {
  content: string
  isUserMessage: boolean
}

export const Message = ({ content, isUserMessage }: MessageProps) => {
  return (
    <div
      className={cn({
        'bg-zinc-900': isUserMessage,
        'bg-zinc-900/50': !isUserMessage,
      })}
    >
      <div className="p-6">
        <div className="mx-auto flex max-w-3xl items-start gap-2.5">
          <div
            className={cn(
              'flex aspect-square size-10 shrink-0 items-center justify-center rounded-full border border-zinc-700',
              {
                'border-blue-700 bg-blue-950 text-zinc-200': isUserMessage,
              }
            )}
          >
            {isUserMessage ? (
              <User className="size-5" />
            ) : (
              <Bot className="size-5 text-white" />
            )}
          </div>

          <div className="ml-6 flex w-full flex-col">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {isUserMessage ? 'You' : 'Website'}
              </span>
            </div>

            <p className="py-2.5 text-sm font-normal text-gray-900 dark:text-white">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
