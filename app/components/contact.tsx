import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";

export const ContactMeWrapper = () => {
  return (
    <div className="flex flex-col gap-5 p-10">
      <h3>Contact Me</h3>
      <form className="flex flex-col gap-5 md:max-w-[600px]">
        <Input placeholder="Enter your name" />
        <Input placeholder="Enter your email" />
        <Textarea placeholder="Enter your message" rows={5} />
        <Button variant="primaryGr" size="md">
          Submit
        </Button>
      </form>
    </div>
  );
};
