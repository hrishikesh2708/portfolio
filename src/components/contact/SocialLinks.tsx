import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { openNewTab, socials } from "@/components/utils/uitility";

/**
 * Social media links component
 */
const SocialLinks = () => {
    return (
        <TooltipProvider>
            <div className="flex gap-2">
                {socials.map((social) => (
                    <Tooltip key={social.name}>
                        <TooltipTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full"
                                onClick={() => openNewTab(social.url)}
                            >
                                {social.icon}
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="top">{social.name}</TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    );
};

export default SocialLinks;
