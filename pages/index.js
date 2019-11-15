import Link from 'next/link'

const Post = props => (

    <li>
<Link as={`/${props.slug}`} href={`/post?title=${props.title}`}>
<a>{props.title}</a>
</Link>
</li>
)

export default () => (
    <div>
    <p>Hello World!</p>
<Link href="/contact">
    <a>Contact me!</a>
</Link>
    <h2>My blog</h2>
<ul>
<li>
<Post slug="yet-another-post" title="Yet another post" />
    <Post slug="second-post" title="Second post" />
    <Post slug="hello-world" title="Hello, world!" />
    </li>
    </ul>
    </div>
)