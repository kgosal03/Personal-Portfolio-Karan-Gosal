import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Github } from "lucide-react"

export default function Projects() {
  return (
    <main className="flex flex-col items-start justify-start min-h-screen w-[90%] sm:w-[60%] mx-auto px-8 py-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full justify-start">
        
        {/* Project Card */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Marketscrape</CardTitle>
            <CardDescription className="grid grid-rows-2 gap-2">
              {/* Date */}
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                Sept. 2022 — Jul. 3 2023
              </div>
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                <Badge>Python</Badge>
                <Badge>TensorFlow</Badge>
                <Badge>Django</Badge>
              </div>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-muted-foreground">
              A web application that analyzes Facebook Marketplace listings to provide insights
              on the best deals, allowing for significant leverage in bargaining. A GRU-based RNN
              for price prediction and a SVM for brand name inference was trained on the{" "}
              <a
                href="https://www.kaggle.com/datasets/rohitamalnerkar/mercari-dataset"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-2"
              >
                Mercari
              </a>{" "}
              data set, and a web scraper was used to collect the Facebook Marketplace data.
            </p>
          </CardContent>

          <CardFooter className="flex justify-start">
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a
                href="https://github.com/orgs/Marketscrape/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> Source Code
              </a>
            </Button>
          </CardFooter>
        </Card>

        {/* More Cards here... */}

      </div>
    </main>
  );
}
