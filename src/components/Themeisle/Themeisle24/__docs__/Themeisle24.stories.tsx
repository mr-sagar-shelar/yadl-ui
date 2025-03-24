import type { Meta, StoryObj } from "@storybook/react";
import Themeisle24 from "../Themeisle24";

const meta: Meta<typeof Themeisle24> = { title: "Themeisle/Themeisle24", component: Themeisle24 };

export default meta;
type Story = StoryObj<typeof Themeisle24>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
