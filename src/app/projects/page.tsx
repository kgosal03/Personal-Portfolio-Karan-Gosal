import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Github } from "lucide-react"
import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <main className="flex flex-col items-start justify-start min-h-screen w-[90%] sm:w-[60%] mx-auto px-8 py-10">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="grid gap-6 w-full justify-start"
     style={{
       gridTemplateColumns: "repeat(auto-fit, minmax(272px, 1fr))"
     }}>
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col w-full min-w-[272px] min-h-[404px]">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="grid grid-rows-2 gap-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  {project.date}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i}>{tech}</Badge>
                  ))}
                </div>
              </CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                {project.description.includes("Mercari") && project.datasetLink ? (
                  <>
                    {project.description.split("Mercari")[0]}
                    <a
                      href={project.datasetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-2"
                    >
                      Mercari
                    </a>
                    {project.description.split("Mercari")[1]}
                  </>
                ) : (
                  project.description
                )}
              </p>
            </CardContent>

            {/* Footer is pushed to the bottom with mt-auto */}
            <CardFooter className="flex justify-start mt-auto">
              {project.sourceCode && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" /> Source Code
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
