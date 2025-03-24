import type { Meta, StoryObj } from "@storybook/react";
import Themeisle345 from "../Themeisle345";

const meta: Meta<typeof Themeisle345> = { title: "Themeisle/Themeisle345", component: Themeisle345 };

export default meta;
type Story = StoryObj<typeof Themeisle345>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
