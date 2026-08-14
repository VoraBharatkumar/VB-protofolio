

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const TOKEN_COLOR = {
  kw: 'text-indigo-600',
  str: 'text-emerald-600',
  type: 'text-sky-600',
  fn: 'text-amber-600',
  plain: 'text-slate-700',
}

const TS_BOX = {
  id: 'ts',
  label: 'TypeScript',
  snippets: [
    {
      id: 'model',
      filename: 'User.model.ts',
      lang: 'TypeScript',
      status: '✓ Schema validated',
      lines: [
        [
          { t: 'import ', c: 'kw' },
          { t: '{ Schema, model, models } ', c: 'type' },
          { t: 'from ', c: 'kw' },
          { t: "'mongoose'", c: 'str' },
        ],
        [],
        [
          { t: 'const ', c: 'kw' },
          { t: 'UserSchema ', c: 'type' },
          { t: '= ' },
          { t: 'new ', c: 'kw' },
          { t: 'Schema', c: 'type' },
          { t: '({' },
        ],
        [
          { t: '  name: { type: ' },
          { t: 'String', c: 'type' },
          { t: ', required: ' },
          { t: 'true', c: 'kw' },
          { t: ' },' },
        ],
        [
          { t: '  email: { type: ' },
          { t: 'String', c: 'type' },
          { t: ', unique: ' },
          { t: 'true', c: 'kw' },
          { t: ' },' },
        ],
        [
          { t: '  role: { type: ' },
          { t: 'String', c: 'type' },
          { t: ', default: ' },
          { t: "'member'", c: 'str' },
          { t: ' },' },
        ],
        [
          { t: '}, { timestamps: ' },
          { t: 'true', c: 'kw' },
          { t: ' })' },
        ],
        [],
        [
          { t: 'export default ', c: 'kw' },
          { t: 'models.User ', c: 'type' },
          { t: '|| ' },
          { t: 'model', c: 'fn' },
          { t: "('User', UserSchema)" },
        ],
      ],
    },

    {
      id: 'route',
      filename: 'route.ts',
      lang: 'TypeScript',
      status: '→ 200 OK · 42ms',
      lines: [
        [
          { t: 'import ', c: 'kw' },
          { t: '{ NextResponse } ', c: 'type' },
          { t: 'from ', c: 'kw' },
          { t: "'next/server'", c: 'str' },
        ],
        [
          { t: 'import ', c: 'kw' },
          { t: '{ connectDB } ', c: 'type' },
          { t: 'from ', c: 'kw' },
          { t: "'@/lib/db'", c: 'str' },
        ],
        [
          { t: 'import ', c: 'kw' },
          { t: 'User ', c: 'type' },
          { t: 'from ', c: 'kw' },
          { t: "'@/models/User'", c: 'str' },
        ],
        [],
        [
          { t: 'export async function ', c: 'kw' },
          { t: 'GET', c: 'fn' },
          { t: '() {' },
        ],
        [
          { t: '  await ', c: 'kw' },
          { t: 'connectDB', c: 'fn' },
          { t: '()' },
        ],
        [
          { t: '  const ', c: 'kw' },
          { t: 'users ' },
          { t: '= ' },
          { t: 'await ', c: 'kw' },
          { t: 'User.find', c: 'fn' },
          { t: '().limit(10)' },
        ],
        [
          { t: '  return ', c: 'kw' },
          { t: 'NextResponse.json', c: 'fn' },
          { t: '({ users, ok: ' },
          { t: 'true', c: 'kw' },
          { t: ' })' },
        ],
        [{ t: '}' }],
      ],
    },

    {
      id: 'page',
      filename: 'page.tsx',
      lang: 'TSX',
      status: '✓ Rendered · Hydrated',
      lines: [
        [{ t: "'use client'", c: 'str' }],
        [
          { t: 'import ', c: 'kw' },
          { t: '{ useEffect, useState } ', c: 'type' },
          { t: 'from ', c: 'kw' },
          { t: "'react'", c: 'str' },
        ],
        [],
        [
          { t: 'export default function ', c: 'kw' },
          { t: 'Dashboard', c: 'fn' },
          { t: '() {' },
        ],
        [
          { t: '  const ', c: 'kw' },
          { t: '[users, setUsers] ' },
          { t: '= ' },
          { t: 'useState', c: 'fn' },
          { t: '([])' },
        ],
        [],
        [
          { t: '  useEffect', c: 'fn' },
          { t: '(() => {' },
        ],
        [{ t: "    fetch('/api/users')", c: 'str' }],
        [
          { t: '      .then', c: 'fn' },
          { t: '((r) => r.json())' },
        ],
        [
          { t: '      .then', c: 'fn' },
          { t: '((d) => setUsers(d.users))' },
        ],
        [{ t: '  }, [])' }],
        [],
        [
          { t: '  return ', c: 'kw' },
          { t: '<UserList ', c: 'type' },
          { t: 'users' },
          { t: '={users} />' },
        ],
        [{ t: '}' }],
      ],
    },
  ],
}

const JS_BOX = {
  id: 'js',
  label: 'React / JS',
  snippets: [
    {
      id: 'model',
      filename: 'User.model.js',
      lang: 'JavaScript',
      status: '✓ Schema validated',
      lines: [
        [
          { t: 'const ', c: 'kw' },
          { t: '{ Schema, model } ', c: 'type' },
          { t: '= ' },
          { t: 'require', c: 'fn' },
          { t: "('mongoose')" },
        ],
        [],
        [
          { t: 'const ', c: 'kw' },
          { t: 'UserSchema ', c: 'type' },
          { t: '= ' },
          { t: 'new ', c: 'kw' },
          { t: 'Schema', c: 'type' },
          { t: '({' },
        ],
        [
          { t: '  name: { type: ' },
          { t: 'String', c: 'type' },
          { t: ', required: ' },
          { t: 'true', c: 'kw' },
          { t: ' },' },
        ],
        [
          { t: '  email: { type: ' },
          { t: 'String', c: 'type' },
          { t: ', unique: ' },
          { t: 'true', c: 'kw' },
          { t: ' },' },
        ],
        [
          { t: '  role: { type: ' },
          { t: 'String', c: 'type' },
          { t: ', default: ' },
          { t: "'member'", c: 'str' },
          { t: ' },' },
        ],
        [
          { t: '}, { timestamps: ' },
          { t: 'true', c: 'kw' },
          { t: ' })' },
        ],
        [],
        [
          { t: 'module.exports ', c: 'kw' },
          { t: '= ' },
          { t: 'model', c: 'fn' },
          { t: "('User', UserSchema)" },
        ],
      ],
    },

    {
      id: 'route',
      filename: 'route.js',
      lang: 'JavaScript',
      status: '→ 200 OK · 42ms',
      lines: [
        [
          { t: 'const ', c: 'kw' },
          { t: '{ connectDB } ', c: 'type' },
          { t: '= ' },
          { t: 'require', c: 'fn' },
          { t: "('../lib/db')" },
        ],
        [
          { t: 'const ', c: 'kw' },
          { t: 'User ', c: 'type' },
          { t: '= ' },
          { t: 'require', c: 'fn' },
          { t: "('../models/User')" },
        ],
        [],
        [
          { t: 'async function ', c: 'kw' },
          { t: 'getUsers', c: 'fn' },
          { t: '() {' },
        ],
        [
          { t: '  await ', c: 'kw' },
          { t: 'connectDB', c: 'fn' },
          { t: '()' },
        ],
        [
          { t: '  const ', c: 'kw' },
          { t: 'users ' },
          { t: '= ' },
          { t: 'await ', c: 'kw' },
          { t: 'User.find', c: 'fn' },
          { t: '().limit(10)' },
        ],
        [
          { t: '  return ', c: 'kw' },
          { t: 'res.json', c: 'fn' },
          { t: '({ users, ok: ' },
          { t: 'true', c: 'kw' },
          { t: ' })' },
        ],
        [{ t: '}' }],
      ],
    },

    {
      id: 'page',
      filename: 'App.jsx',
      lang: 'JSX',
      status: '✓ Rendered · Hydrated',
      lines: [
        [
          { t: 'import ', c: 'kw' },
          { t: '{ useState, useEffect } ', c: 'type' },
          { t: 'from ', c: 'kw' },
          { t: "'react'", c: 'str' },
        ],
        [],
        [
          { t: 'export default function ', c: 'kw' },
          { t: 'App', c: 'fn' },
          { t: '() {' },
        ],
        [
          { t: '  const ', c: 'kw' },
          { t: '[users, setUsers] ' },
          { t: '= ' },
          { t: 'useState', c: 'fn' },
          { t: '([])' },
        ],
        [],
        [
          { t: '  useEffect', c: 'fn' },
          { t: '(() => {' },
        ],
        [{ t: "    fetch('/api/users')", c: 'str' }],
        [
          { t: '      .then', c: 'fn' },
          { t: '((r) => r.json())' },
        ],
        [
          { t: '      .then', c: 'fn' },
          { t: '((d) => setUsers(d.users))' },
        ],
        [{ t: '  }, [])' }],
        [],
        [{ t: '  return ', c: 'kw' }, { t: '(' }],
        [{ t: '    <div className="p-4">' }],
        [{ t: '      <h1>Users</h1>' }],
        [{ t: '      <ul>' }],
        [{ t: '        {users.map((user) => (' }],
        [{ t: '          <li key={user.id}>{user.name}</li>' }],
        [{ t: '        ))}' }],
        [{ t: '      </ul>' }],
        [{ t: '    </div>' }],
        [{ t: '  )' }],
        [{ t: '}' }],
      ],
    },
  ],
}

const BOXES = [TS_BOX, JS_BOX]

const lineVariants = {
  hidden: {
    opacity: 0,
    x: -6,
  },

  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.045,
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const STEP_INTERVAL = 2000

export function CodeShowcase() {
  const [boxIndex, setBoxIndex] = useState(0)
  const [activeTab, setActiveTab] = useState(0)

  const box = BOXES[boxIndex]
  const snippet = box.snippets[activeTab]

  const revealDelay = snippet.lines.length * 0.045 + 0.25


  useEffect(() => {
    const timer = window.setTimeout(() => {
      const currentBox = BOXES[boxIndex]

      if (activeTab < currentBox.snippets.length - 1) {
        // Same language → next file
        setActiveTab((current) => current + 1)
      } else {
        // Last file completed → flip to next language
        setBoxIndex((current) => (current + 1) % BOXES.length)

        // New language always starts from Model
        setActiveTab(0)
      }
    }, STEP_INTERVAL)

    return () => window.clearTimeout(timer)
  }, [boxIndex, activeTab])

  const handleBoxClick = (index) => {
    setBoxIndex(index)
    setActiveTab(0)
  }

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  return (
    <div className="relative mx-auto w-full max-w-md pb-8 lg:max-w-none">

      {/* Box selector */}
      <div className="mb-3 flex items-center justify-center gap-2">
        {BOXES.map((b, i) => (
          <button
            key={b.id}
            onClick={() => handleBoxClick(i)}
            className={`relative rounded-lg px-4 py-1.5 font-mono text-[11px] font-semibold transition-all ${
              i === boxIndex
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                : 'border border-slate-200 bg-white text-slate-500 hover:border-indigo-300 hover:text-indigo-600'
            }`}
          >
            {b.label}
          </button>
        ))}
      </div>

      <div
        className="relative"
        style={{ perspective: 1200 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={box.id}
            initial={{
              rotateY: 90,
              opacity: 0,
            }}
            animate={{
              rotateY: 0,
              opacity: 1,
            }}
            exit={{
              rotateY: -90,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformStyle: 'preserve-3d',
            }}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_80px_-30px_rgba(79,70,229,0.35)]"
          >

            {/* Title bar */}
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              </div>

              <span className="font-mono text-[11px] text-slate-400">
                full-stack.dev
              </span>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto border-b border-slate-100 bg-white px-3 pt-2">
              {box.snippets.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => handleTabClick(i)}
                  className={`relative whitespace-nowrap px-3 py-2 font-mono text-[12px] transition-colors ${
                    i === activeTab
                      ? 'text-indigo-600'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {s.filename}

                  {i === activeTab && (
                    <motion.span
                      layoutId="active-tab-underline"
                      className="absolute inset-x-2 -bottom-px h-[2px] rounded-full bg-indigo-600"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Code area */}
            <div className="flex h-[300px] gap-4 overflow-y-auto bg-white px-4 py-4 sm:h-[320px]">

              {/* Line numbers */}
              <div className="select-none font-mono text-[12.5px] leading-[1.65] text-slate-300">
                {snippet.lines.map((_, i) => (
                  <div key={i}>
                    {i + 1}
                  </div>
                ))}
              </div>

              {/* Code */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${box.id}-${snippet.id}`}
                  className="font-mono text-[12.5px] leading-[1.65]"
                >
                  {snippet.lines.map((line, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={lineVariants}
                      initial="hidden"
                      animate="show"
                      className="whitespace-pre"
                    >
                      {line.length === 0
                        ? '\u00A0'
                        : line.map((tok, j) => (
                            <span
                              key={j}
                              className={TOKEN_COLOR[tok.c ?? 'plain']}
                            >
                              {tok.t}
                            </span>
                          ))}
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/70 px-4 py-2.5">

              <motion.div
                key={`${box.id}-${snippet.status}`}
                initial={{
                  opacity: 0,
                  y: 4,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: revealDelay,
                  duration: 0.3,
                }}
                className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>

                {snippet.status}
              </motion.div>

              <span className="rounded-md bg-indigo-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-indigo-600">
                {snippet.lang}
              </span>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}