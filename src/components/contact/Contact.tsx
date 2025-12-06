import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SocialLinks from "./SocialLinks";
import MessageForm from "./MessageForm";
import CalendarView from "./CalendarView";
import TimeSlotSelector from "./TimeSlotSelector";
import MeetingDetails from "./MeetingDetails";
import ConfirmationForm from "./ConfirmationForm";
import { useCalendlyAvailability } from "./hooks/useCalendlyAvailability";
import { useTimeFormatter } from "./hooks/useTimeFormatter";
import { useTimezoneManager } from "./hooks/useTimezoneManager";
import { createCalendlyEvent } from "./utils/calendlyApi";
import { combineDateTimeInTimeZone } from "./utils/timeUtils";

const Contact = () => {
  const { timezone, timezones, setTimezone } = useTimezoneManager();
  const { timeFormat, handle12Hr, handle24Hr } = useTimeFormatter();
  const {
    availableDates,
    availableTimes,
    date,
    setDate,
    selectedTime,
    setSelectedTime,
  } = useCalendlyAvailability(timezone);

  const [formState, setFormState] = useState<boolean>(false);

  const handleBackFromConfirmation = () => {
    setFormState(false);
  };

  const handleConfirmationContinue = async (data: {
    name: string;
    email: string;
    about: string;
    notes: string;
  }) => {
    if (!date || !selectedTime) return;

    const startUTC = combineDateTimeInTimeZone(date, selectedTime, timezone);

    const result = await createCalendlyEvent({
      email: data.email,
      name: data.name,
      startTime: startUTC,
      timezone,
    });

    console.log("Calendly created:", result);
  };

  return (
    <div>
      <div>
        <SocialLinks />
      </div>
      <div className="flex w-full flex-col gap-6">
        <Tabs defaultValue="quick_contact" className="gap-4">
          <TabsList className="mx-auto">
            <TabsTrigger value="quick_contact">Quick Contact</TabsTrigger>
            <TabsTrigger value="send_message">Send a Message</TabsTrigger>
          </TabsList>

          <TabsContent value="quick_contact" className="">
            <Card className="">
              <CardContent className="w-full grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
                <MeetingDetails
                  date={date}
                  selectedTime={selectedTime}
                  timezone={timezone}
                  timezones={timezones}
                  onTimezoneChange={setTimezone}
                  timeFormat={timeFormat}
                />

                {formState ? (
                  <ConfirmationForm
                    onBack={handleBackFromConfirmation}
                    onContinue={handleConfirmationContinue}
                  />
                ) : (
                  <div className="lg:col-span-2">
                    <Card className="gap-0 p-0">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                          <CalendarView
                            date={date}
                            onDateSelect={(d) => d && setDate(d)}
                            availableDates={availableDates}
                          />

                          <TimeSlotSelector
                            date={date}
                            availableTimes={availableTimes}
                            selectedTime={selectedTime}
                            onTimeSelect={setSelectedTime}
                            timeFormat={timeFormat}
                            onToggle12Hr={handle12Hr}
                            onToggle24Hr={handle24Hr}
                          />
                        </div>
                      </CardContent>

                      <CardFooter className="flex flex-col gap-4 border-t px-6 py-5 md:flex-row">
                        <div className="text-sm">
                          {date && selectedTime ? (
                            <>
                              Your meeting will be booked for{" "}
                              <span className="font-medium">
                                {date?.toLocaleDateString("en-US", {
                                  weekday: "long",
                                  day: "numeric",
                                  month: "long",
                                })}
                              </span>{" "}
                              at{" "}
                              <span className="font-medium">
                                {selectedTime}
                              </span>
                              .
                            </>
                          ) : (
                            <>Select a date and time for your meeting.</>
                          )}
                        </div>
                        <Button
                          disabled={!date || !selectedTime}
                          className="w-full md:ml-auto md:w-auto"
                          variant="outline"
                          onClick={() => {
                            setFormState(true);
                          }}
                        >
                          Continue
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                )}
              </CardContent>
            </Card>
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
