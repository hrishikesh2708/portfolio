import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SocialLinks from "./SocialLinks";
import MessageForm from "./MessageForm";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])

  return (
    <div>
      <div className="mt-24 mb-6 flex w-full flex-col items-center text-balance">
        <p className=" text-center uppercase tracking-widest text-muted-foreground text-sm font-mono mb-2">
          Contact
        </p>
        <h2 className="text-center font-instrument text-4xl xs:text-5xl md:text-6xl mb-2">
          <span className="inline">
            Get in Touch
          </span>
        </h2>
        <SocialLinks />
      </div>
      <div className="flex w-full flex-col gap-6">
        <Tabs defaultValue="quick_contact" className="gap-4">
          <TabsList className="mx-auto">
            <TabsTrigger value="quick_contact" className="md:px-20 px-5">Quick Contact</TabsTrigger>
            <TabsTrigger value="send_message" className="md:px-20 px-5">Send a Message</TabsTrigger>
          </TabsList>

          <TabsContent value="quick_contact" className="lg:w-4xl">
            <Cal namespace="30min"
              calLink="hrishikesh-thakur/30min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ "layout": "month_view" }}
            />
          </TabsContent>

          <TabsContent value="send_message">
            <MessageForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Contact;
