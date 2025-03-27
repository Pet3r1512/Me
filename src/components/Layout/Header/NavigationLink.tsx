export interface NavigationLinkProps {
  setIsMenuOpen: (isOpen: boolean) => void;
  sectionId: string;
  sectionName: string;
}

export default function NavigationLink({
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
      className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
    >
      {props.sectionName}
    </button>
  );
}
