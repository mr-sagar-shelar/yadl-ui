import type { Meta, StoryObj } from "@storybook/react";
import CountrySide from "../CountrySide";

const meta: Meta<typeof CountrySide> = { title: "unDraw/CountrySide", component: CountrySide };

export default meta;
type Story = StoryObj<typeof CountrySide>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
