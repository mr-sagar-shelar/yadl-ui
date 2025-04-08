import type { Meta, StoryObj } from "@storybook/react";
import Themeisle373 from "../Themeisle373";

const meta: Meta<typeof Themeisle373> = { title: "Themeisle/Themeisle373", component: Themeisle373 };

export default meta;
type Story = StoryObj<typeof Themeisle373>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
