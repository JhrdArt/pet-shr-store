import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";
import { NavbarContextProvider } from "./context/useNavbar";
import Header from "./components/header/Index";
import { SlidePanelContextProvider } from "./context/useSlidePanel";
import { ProductContextProvider } from "./context/useProduct";
import Footer from "./components/footer";
import ModalShopping from "./components/header/modals/modal-shopping";
import ModalNavContent from "./components/header/modals/modal-nav-content";
import ButtonToTop from "./components/global/button-to-top";
import WhatsappButton from "./components/global/whatsapp-button";
import { LoaderContextProvider } from "./context/useLoader";
import { UserDataContextProvider } from "./context/useUserData";
import { CheckoutContextProvider } from "./context/useCheckoutDetails";
import Announced from "./components/global/announced";
import { ProductTypeProvider } from "./context/useProductType";
import { SearchGlobalContextProvider } from "./context/useSearchGlobalValue";
import ModalSearchMobile from "./components/header/modals/modal-search-mobile";
import ChatbotTrigger from "./components/chatbot-AI/chatbot-ai-trigger";
import ChatbotAIWindow from "./components/chatbot-AI/chatbot-ai-window";
import { ChatbotContextProvider } from "./context/useChatbotOpen";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
  { rel: "icon", href: "../public/icons/logo.png", type: "favicon" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <ProductContextProvider>
        <SlidePanelContextProvider>
          <NavbarContextProvider>
            <LoaderContextProvider>
              <UserDataContextProvider>
                <CheckoutContextProvider>
                  <ProductTypeProvider>
                    <SearchGlobalContextProvider>
                      <ChatbotContextProvider>
                        <body className="w-dvw h-auto overflow-x-hidden">
                          {pathname !== "/login" &&
                            pathname !== "/checkout-details" &&
                            pathname !== "/payment-process" && (
                              <>
                                <Header />
                                <Announced />
                              </>
                            )}
                          {children}
                          {pathname !== "/login" &&
                            pathname !== "/checkout-details" &&
                            pathname !== "/payment-process" && (
                              <>
                                <Footer />
                                <ModalShopping />
                                <ModalNavContent />
                                <ModalSearchMobile />
                                <ChatbotAIWindow />
                                <div className="md:right-6 z-10 right-2 fixed bottom-10 flex flex-col gap-3">
                                  <ButtonToTop />
                                  <WhatsappButton />
                                  <ChatbotTrigger />
                                </div>
                              </>
                            )}

                          <ScrollRestoration />
                          <Scripts />
                        </body>
                      </ChatbotContextProvider>
                    </SearchGlobalContextProvider>
                  </ProductTypeProvider>
                </CheckoutContextProvider>
              </UserDataContextProvider>
            </LoaderContextProvider>
          </NavbarContextProvider>
        </SlidePanelContextProvider>
      </ProductContextProvider>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
