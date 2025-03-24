import type { Meta, StoryObj } from "@storybook/react";
import Back_homeBackHome from "../Back_homeBackHome";

const meta: Meta<typeof Back_homeBackHome> = { title: "unDraw/Back_homeBackHome", component: Back_homeBackHome };

export default meta;
type Story = StoryObj<typeof Back_homeBackHome>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
