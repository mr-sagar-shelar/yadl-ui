import type { Meta, StoryObj } from "@storybook/react";
import Themeisle298 from "../Themeisle298";

const meta: Meta<typeof Themeisle298> = { title: "Themeisle/Themeisle298", component: Themeisle298 };

export default meta;
type Story = StoryObj<typeof Themeisle298>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
