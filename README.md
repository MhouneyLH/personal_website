# personal_website

This is the source code for my personal website which you can find at [mhouneylh.github.io/personal_website](https://mhouneylh.github.io/personal_website).

## Development

### With Node

Install dependencies:

```bash
pnpm install
```

Start:

```bash
pnpm run dev
```

Preview for production:

```bash
pnpm run build && pnpm run preview
```

Release to GitHub Pages:

```bash
pnpm run build && pnpm run deploy
```

### With Docker

Start:

```bash
docker compose up -d
```

Start and rebuild image:

```bash
docker compose up -d --build
```

Stop:

```bash
docker compose down
```

Release to GitHub Pages:

```bash
TBD
```

## Todos & Ideas

- [x] Add footer
- [x] Fix theming issues -> only use dark mode
- [ ] Add navigation bar
- [ ] Add privacy policy in nice looking way
- [ ] Add legal notice in nice looking way
- [ ] Add a blog
- [ ] Add small minigame in the background
- [ ] Make projects overview prettier and add more depth to it (dedicated page for a project maybe?)
