import type { Meta, StoryObj } from "@storybook/react";
import Themeisle19 from "../Themeisle19";

const meta: Meta<typeof Themeisle19> = { title: "Themeisle/Themeisle19", component: Themeisle19 };

export default meta;
type Story = StoryObj<typeof Themeisle19>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
