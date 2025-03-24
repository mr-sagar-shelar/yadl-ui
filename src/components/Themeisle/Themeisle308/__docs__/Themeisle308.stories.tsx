import type { Meta, StoryObj } from "@storybook/react";
import Themeisle308 from "../Themeisle308";

const meta: Meta<typeof Themeisle308> = { title: "Themeisle/Themeisle308", component: Themeisle308 };

export default meta;
type Story = StoryObj<typeof Themeisle308>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
