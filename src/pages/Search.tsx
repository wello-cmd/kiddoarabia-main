import EnhancedLayout from "@/components/EnhancedLayout";
import SEOHead from "@/components/SEOHead";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [params] = useSearchParams();
  const q = params.get("q") || "";

  return (
    <>
      <SEOHead
        title={`Search Results${q ? ` for "${q}"` : ""} | Kiddo Arabia`}
        description={`Search results${q ? ` for "${q}"` : ""} at Kiddo Arabia.`}
        keywords="search, kiddo arabia, products, recipes"
      />
      <EnhancedLayout>
        <main id="main-content" className="container mx-auto px-4 py-8">
          <header className="mb-6">
            <h1 className="text-3xl font-semibold text-foreground">Search Results</h1>
            {q && (
              <p className="text-muted-foreground mt-2">Showing results for: <strong>{q}</strong></p>
            )}
          </header>

          <section aria-live="polite" className="text-muted-foreground">
            <p>No search implementation yet. Try our Products or Recipes pages.</p>
          </section>
        </main>
      </EnhancedLayout>
    </>
  );
};

export default Search;
