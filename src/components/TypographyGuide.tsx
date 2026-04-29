import { Card } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export function TypographyGuide() {
  return (
    <div className="space-y-8">
      <div>
        <h2>Typography</h2>
        <p className="text-muted-foreground mt-2">
          Typography creates hierarchy and improves readability. Our system uses consistent sizing and spacing.
        </p>
      </div>

      <Card className="p-6 space-y-6">
        <div>
          <h1>Heading 1 - Main Page Title</h1>
          <code className="text-muted-foreground block mt-2" style={{ fontSize: '0.75rem' }}>
            {'<h1>Heading 1 - Main Page Title</h1>'}
          </code>
        </div>

        <div>
          <h2>Heading 2 - Section Title</h2>
          <code className="text-muted-foreground block mt-2" style={{ fontSize: '0.75rem' }}>
            {'<h2>Heading 2 - Section Title</h2>'}
          </code>
        </div>

        <div>
          <h3>Heading 3 - Subsection Title</h3>
          <code className="text-muted-foreground block mt-2" style={{ fontSize: '0.75rem' }}>
            {'<h3>Heading 3 - Subsection Title</h3>'}
          </code>
        </div>

        <div>
          <h4>Heading 4 - Component Title</h4>
          <code className="text-muted-foreground block mt-2" style={{ fontSize: '0.75rem' }}>
            {'<h4>Heading 4 - Component Title</h4>'}
          </code>
        </div>

        <div>
          <p>
            Paragraph text is used for body content. It should be easily readable and have appropriate line height for
            comfortable reading. This is the default text style used throughout the application.
          </p>
          <code className="text-muted-foreground block mt-2" style={{ fontSize: '0.75rem' }}>
            {'<p>Paragraph text...</p>'}
          </code>
        </div>

        <div>
          <p className="text-muted-foreground">
            Muted text is used for secondary information, descriptions, and less important content.
          </p>
          <code className="text-muted-foreground block mt-2" style={{ fontSize: '0.75rem' }}>
            {'<p className="text-muted-foreground">Muted text...</p>'}
          </code>
        </div>
      </Card>

      <div>
        <h3 className="mb-4">Typography Scale</h3>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Element</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Weight</TableHead>
                <TableHead>Line Height</TableHead>
                <TableHead>Usage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>H1</TableCell>
                <TableCell>2xl</TableCell>
                <TableCell>Medium (500)</TableCell>
                <TableCell>1.5</TableCell>
                <TableCell>Page titles</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>H2</TableCell>
                <TableCell>xl</TableCell>
                <TableCell>Medium (500)</TableCell>
                <TableCell>1.5</TableCell>
                <TableCell>Section headings</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>H3</TableCell>
                <TableCell>lg</TableCell>
                <TableCell>Medium (500)</TableCell>
                <TableCell>1.5</TableCell>
                <TableCell>Subsection headings</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>H4</TableCell>
                <TableCell>base</TableCell>
                <TableCell>Medium (500)</TableCell>
                <TableCell>1.5</TableCell>
                <TableCell>Component headings</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Paragraph</TableCell>
                <TableCell>base</TableCell>
                <TableCell>Normal (400)</TableCell>
                <TableCell>1.5</TableCell>
                <TableCell>Body text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Button</TableCell>
                <TableCell>base</TableCell>
                <TableCell>Medium (500)</TableCell>
                <TableCell>1.5</TableCell>
                <TableCell>Interactive elements</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="mb-3">Best Practices</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Use headings hierarchically (don't skip levels)</li>
          <li>• Maintain consistent line height for readability (1.5 is optimal)</li>
          <li>• Limit line length to 60-80 characters for body text</li>
          <li>• Use medium weight (500) for emphasis without being too heavy</li>
          <li>• Ensure sufficient contrast between text and background (4.5:1 minimum)</li>
        </ul>
      </Card>
    </div>
  );
}
