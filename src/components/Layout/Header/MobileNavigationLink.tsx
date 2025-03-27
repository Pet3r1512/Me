import { NavigationLinkProps } from "./NavigationLink";

export default function MobileNavigationLink({
  props,
}: {
  props: NavigationLinkProps;
}) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      props.setIsMenuOpen(false);
    }
  };
  return (
    <button
      onClick={() => scrollToSection(props.sectionId)}
      className="py-3 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 border-b border-gray-200 dark:border-gray-700"
    >
      {props.sectionName}
    </button>
  );
}
