import Link from "next/link";
import ThemeToggleButton from "../customui/ThemeToggleButton";
import { AuroraText } from "../magicui/aurora-text";

const Header = () => {
	return (
		<header className="border-b shadow">
			<div className="container mx-auto flex items-center justify-between px-6 py-3">
				<Link href={"/"}>
					<AuroraText className="text-3xl font-bold">
						Calculator App
					</AuroraText>
				</Link>

				<nav className="flex items-center gap-4">
					<Link href={"/"}>Basic</Link>
					<Link href={"/advanced"}>Advanced</Link>

					<ThemeToggleButton />
				</nav>
			</div>
		</header>
	);
};

export default Header;
