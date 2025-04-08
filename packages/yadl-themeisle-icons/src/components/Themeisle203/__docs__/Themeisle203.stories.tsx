import type { Meta, StoryObj } from "@storybook/react";
import Themeisle203 from "../Themeisle203";

const meta: Meta<typeof Themeisle203> = { title: "Themeisle/Themeisle203", component: Themeisle203 };

export default meta;
type Story = StoryObj<typeof Themeisle203>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
