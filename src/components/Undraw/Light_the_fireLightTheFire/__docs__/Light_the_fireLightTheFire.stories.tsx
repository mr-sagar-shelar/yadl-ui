import type { Meta, StoryObj } from "@storybook/react";
import Light_the_fireLightTheFire from "../Light_the_fireLightTheFire";

const meta: Meta<typeof Light_the_fireLightTheFire> = { title: "unDraw/Light_the_fireLightTheFire", component: Light_the_fireLightTheFire };

export default meta;
type Story = StoryObj<typeof Light_the_fireLightTheFire>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
