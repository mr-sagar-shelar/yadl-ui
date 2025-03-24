import type { Meta, StoryObj } from "@storybook/react";
import Themeisle234 from "../Themeisle234";

const meta: Meta<typeof Themeisle234> = { title: "Themeisle/Themeisle234", component: Themeisle234 };

export default meta;
type Story = StoryObj<typeof Themeisle234>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
