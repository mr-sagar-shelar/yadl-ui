import type { Meta, StoryObj } from "@storybook/react";
import Themeisle352 from "../Themeisle352";

const meta: Meta<typeof Themeisle352> = { title: "Themeisle/Themeisle352", component: Themeisle352 };

export default meta;
type Story = StoryObj<typeof Themeisle352>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
