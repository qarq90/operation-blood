import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import android_hand from "../../public/imgs/android_hand.png";

export const Hero = () => {
    const [changeHeroText, setChangeHeroText] = useState(false);
    return (
        <section className="w-full h-dvh flex flex-row gap-32 items-center">
            <div className="h-full w-3/5 shrink-0 flex flex-col justify-around p-16">
                <p></p>
                <p></p>
                <p></p>
                <p
                    className="text-8xl leading-32 relative min-h-[16rem] w-full"
                    onMouseOver={() => setChangeHeroText(true)}
                    onMouseLeave={() => setChangeHeroText(false)}
                >
                    <span
                        className={`block transition-opacity duration-200 ${
                            changeHeroText ? "opacity-0" : "opacity-100"
                        }`}
                        aria-hidden={changeHeroText}
                    >
                        Today&apos;s the day. <br />{" "}
                        <span className="uppercase text-theme font-bold">
                            Someone
                        </span>{" "}
                        <br /> needs you.
                    </span>

                    <span
                        className={`absolute inset-0 block transition-opacity duration-200 ${
                            changeHeroText ? "opacity-100 -top-20" : "opacity-0"
                        }`}
                        aria-hidden={!changeHeroText}
                    >
                        Today{" "}
                        <span className="uppercase text-theme font-bold">
                            you
                        </span>{" "}
                        give. <br /> Tomorrow <br />{" "}
                        <span className="uppercase text-theme font-bold">
                            Someone
                        </span>{" "}
                        gives <br />
                        <span className="uppercase text-theme font-bold">
                            you
                        </span>{" "}
                        back.
                    </span>
                </p>
                <p></p>
                <p></p>

                <div className="flex flex-row gap-4">
                    <Button size="md">Register Now</Button>
                    <Button size="md">Donate Blood</Button>
                    <Button size="md">Request Blood</Button>
                    <Button size="md">Blood Camps</Button>
                </div>

                <p></p>
            </div>

            <div className="h-full w-2/5 shrink-0 flex items-center justify-center -mt-32">
                <div className="relative h-full w-full rounded-lg">
                    <Image
                        src={android_hand}
                        alt=""
                        fill
                        className="object-contain rounded-lg"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};
