import type { Meta, StoryObj } from "@storybook/react";
import Themeisle291 from "../Themeisle291";

const meta: Meta<typeof Themeisle291> = { title: "Themeisle/Themeisle291", component: Themeisle291 };

export default meta;
type Story = StoryObj<typeof Themeisle291>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
