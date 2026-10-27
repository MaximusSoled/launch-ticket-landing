<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Rules

- Scroll reveals use a plain IntersectionObserver hook that toggles a `data-shown`
  attribute; the hidden state is gated by a JS-set `data-reveal-ready` attribute and
  `prefers-reduced-motion` disables it. Why: no animation library is installed, and the
  content must stay readable when JavaScript fails.
