import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Welcome to Our Restaurant</h1>
      <Link href="/menu">
        <a>View Menu</a>
      </Link>
    </div>
  )
}
