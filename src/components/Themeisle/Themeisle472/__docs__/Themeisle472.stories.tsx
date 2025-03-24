import type { Meta, StoryObj } from "@storybook/react";
import Themeisle472 from "../Themeisle472";

const meta: Meta<typeof Themeisle472> = { title: "Themeisle/Themeisle472", component: Themeisle472 };

export default meta;
type Story = StoryObj<typeof Themeisle472>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
