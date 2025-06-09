import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Users, Code, Server, Rocket, CircleCheck } from "lucide-react";

export default function JoinUs() {
  return (
    <section id="join-us" className="bg-muted dark:bg-background py-32 md:py-42 ">

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* First Column - Cards */}
          <div className="flex flex-col gap-6">
            <Card className="shadow-zinc-950/5 w-full hover:scale-[1.03] hover:shadow-lg transition duration-300 ease-in-out">
              <CardHeader className="items-center">
                <Rocket className="size-7 text-zinc-900 mb-2" />
                <h3 className="font-semibold text-lg">Quant Intern</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-center">Work on real signals, not coffee</p>
              </CardContent>
            </Card>

            <Card className="shadow-zinc-950/5 w-full hover:scale-[1.03] hover:shadow-lg transition duration-300 ease-in-out">
              <CardHeader className="items-center">
                <Server className="size-7 text-zinc-900 mb-2" />
                <h3 className="font-semibold text-lg">Systems Developer</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-center">Build the infra our models deserve</p>
              </CardContent>
            </Card>

            <Card className="shadow-zinc-950/5 w-full hover:scale-[1.03] hover:shadow-lg transition duration-300 ease-in-out">
              <CardHeader className="items-center">
                <Code className="size-7 text-zinc-900 mb-2" />
                <h3 className="font-semibold text-lg">Jr. Systems Developer</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-center">Support the infra, and zeal to learn.</p>
              </CardContent>
            </Card>

          </div>

          {/* Second Column - Content */}
          <div className="flex flex-col justify-center h-full">
            <div className="text-center md:text-left mb-8">
              <div className="flex justify-center md:justify-start mb-4 text-4xl font-bold text-zinc-900">
                Join Our Team
              </div>
              <h2 className="text-4xl font-bold mb-6 text-[#1E40AF]">
                We Don't Want Employees. We Want Builders.
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                We're looking for people who:
              </p>
              <ul className="space-y-2 text-lg text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CircleCheck className="mt-1 text-[#1E40AF]" size={20} />
                  <span>Write code that trades</span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="mt-1 text-[#1E40AF]" size={20} />
                  <span>Read papers and question them</span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="mt-1 text-[#1E40AF]" size={20} />
                  <span>Like compounding over complaining</span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="mt-1 text-[#1E40AF]" size={20} />
                  <span>Want their work to hit P&amp;L, not just GitHub</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white"
              >
                <a href="mailto:navmipartners@gmail.com" className="flex items-center gap-2">
                  <Mail className="size-5" /> Reach Out at navmipartners@gmail.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
