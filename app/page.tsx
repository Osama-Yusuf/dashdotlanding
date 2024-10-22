import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleCheck } from "lucide-react";

const features = [
  {
    title: "Smart Todo List",
    description:
      "Organize tasks, set priorities, and track your progress with a clean, intuitive interface that keeps you focused on what matters.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 4h13M8 8h13M8 12h13M8 16h13M8 20h13M3 20l2 2 2-2M3 12l2 2 2-2M3 4l2 2 2-2" />
      </svg>
    ),
  },
  {
    title: "Pomodoro Timer",
    description:
      "Stay focused with customizable work intervals and breaks. Our Pomodoro timer helps you maintain productivity while preventing burnout.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Ambient Sounds",
    description:
      "Create your perfect work environment with a variety of ambient sounds, from gentle rain to coffee shop atmosphere.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 10s3-3 3-8M22 10s-3-3-3-8M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M12 12v8c0 2 1 3 3 3s3-1 3-3M12 20c0 2-1 3-3 3s-3-1-3-3" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <div className="border-b border-border">
        <main className="container mx-auto">
          <div className="relative md:mt-24 mx-auto w-full max-w-4xl pt-4 text-center">
            <div className="justify-center hidden md:flex">
              <div className="flex flex-row items-center justify-center gap-5 p-1 text-xs bg-card/60 backdrop-blur-lg rounded-md border border-border">
                <Badge className="font-semibold">Free Forever</Badge>
                <h5>All features included, no hidden costs!</h5>
                <Link
                  href="https://chromewebstore.google.com/detail/dashdot-todo-task-list/cchfkkgnanpaeibglebgpjcfbdmdaadf"
                  className="flex flex-row items-center"
                  target="_blank"
                >
                  Install Now
                  <ArrowRightIcon className="w-6 h-6 ml-2" />
                </Link>
              </div>
            </div>
            <h1 className="md:text-7xl my-4 font-extrabold text-4xl md:leading-tight">
              Turn Chaos into Checkmarks with DashDot
            </h1>
            <p className="mx-auto my-4 text-sm w-full max-w-xl text-center font-medium leading-relaxed tracking-wide">
              Boost your productivity with a modern todo list, Pomodoro timer,
              and ambient sounds. Stay focused, organized, and stress-free with
              our all-in-one Chrome extension.
            </p>
            <div className="flex flex-row justify-center items-center space-x-4 my-8">
              <Button asChild>
                <Link
                  target="_blank"
                  href="https://chromewebstore.google.com/detail/dashdot-todo-task-list/cchfkkgnanpaeibglebgpjcfbdmdaadf"
                >
                  Install Now
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="#features">Learn More</Link>
              </Button>
            </div>

            <div className="absolute top-0 -z-10 max-h-full max-w-screen-lg w-full h-full blur-2xl">
              <div className="absolute top-24 left-24 w-56 h-56 bg-violet-600 rounded-full mix-blend-multiply opacity-70 animate-blob filter blur-3xl"></div>
              <div className="absolute hidden md:block bottom-2 right-1/4 w-56 h-56 bg-sky-600 rounded-full mix-blend-multiply opacity-70 animate-blob delay-1000 filter blur-3xl"></div>
              <div className="absolute hidden md:block bottom-1/4 left-1/3 w-56 h-56 bg-pink-600 rounded-full mix-blend-multiply opacity-70 animate-blob delay-500 filter blur-3xl"></div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-8 relative aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://youtu.be/4uJI3GiAaaQ"
              // src="https://www.youtube.com/embed/EjIzinrcnT0"
              title="DashDot Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </main>
      </div>

      <section
        id="features"
        className="border-b border-border bg-gradient-to-b from-background to-transparent via-background via-90% relative"
      >
        <div className="container mx-auto text-center">
          <div className="my-24">
            <h5 className="text-primary">FEATURES</h5>
            <h2 className="text-4xl font-extrabold my-4">
              Everything You Need to Stay Productive
            </h2>

            <p className="mx-auto my-4 text-sm w-full max-w-md bg-transparent text-center font-medium leading-relaxed tracking-wide text-muted-foreground">
              Powerful features designed to help you focus, organize, and
              achieve more
            </p>

            <div className="flex flex-col md:flex-row gap-4 mt-12">
              {features.map((feature) => (
                <Card key={feature.title} className="max-w-lg mx-auto">
                  <CardHeader>
                    <div className="w-16 h-16 text-primary-foreground flex justify-center items-center border border-border rounded-xl bg-primary mx-auto">
                      {feature.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className="mt-4">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-0 -z-10 max-h-full w-full h-full blur-2xl">
          <div className="absolute bottom-0 left-0 w-1/2 h-56 bg-violet-600 rounded-full mix-blend-multiply opacity-70 animate-blob filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-56 bg-sky-600 rounded-full mix-blend-multiply opacity-70 animate-blob delay-1000 filter blur-3xl"></div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container mx-auto text-center">
          <div className="py-14">
            <h2 className="text-4xl font-extrabold my-4 text-foreground">
              100% Free, Forever
            </h2>

            <p className="mx-auto my-4 text-sm w-full max-w-md bg-transparent text-center font-medium leading-relaxed tracking-wide text-muted-foreground">
              No premium tiers, no hidden costs. Every feature is available to
              everyone.
            </p>

            <Card className="w-full mx-auto max-w-xl text-left relative mt-8">
              <Badge className="absolute top-4 right-4">Free Forever</Badge>
              <CardHeader>
                <CardTitle className="text-2xl">
                  All Features Included
                </CardTitle>
                <CardDescription className="mt-4">
                  Everything you need to boost your productivity, completely
                  free.
                </CardDescription>
                <h5 className="text-2xl font-bold">$0</h5>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link href="https://chromewebstore.google.com/detail/dashdot-todo-task-list/cchfkkgnanpaeibglebgpjcfbdmdaadf">
                    Install Now
                  </Link>
                </Button>
              </CardContent>
              <CardFooter>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <CircleCheck className="w-4 h-4 text-green-500" />
                    Smart Todo List
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="w-4 h-4 text-green-500" />
                    Pomodoro Timer
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="w-4 h-4 text-green-500" />
                    Ambient Sounds
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="w-4 h-4 text-green-500" />
                    Stretch Reminders
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="w-4 h-4 text-green-500" />
                    Customizable Settings
                  </li>
                </ul>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
