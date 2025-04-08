import type { Meta, StoryObj } from "@storybook/react";
import Themeisle363 from "../Themeisle363";

const meta: Meta<typeof Themeisle363> = { title: "Themeisle/Themeisle363", component: Themeisle363 };

export default meta;
type Story = StoryObj<typeof Themeisle363>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
