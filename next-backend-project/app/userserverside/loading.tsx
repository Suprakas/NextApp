
//This is a loading component for the Next.js app. It will be displayed while the page is loading. It will act as a fallback route,
// allowing the user to see a loading message while the data is being fetched from the server by using axios.get() req.

export default function Loading() {
    return <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            Loading...
        </div>
    </div>
  }