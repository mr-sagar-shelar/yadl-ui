import type { Meta, StoryObj } from "@storybook/react";
import Themeisle140 from "../Themeisle140";

const meta: Meta<typeof Themeisle140> = { title: "Themeisle/Themeisle140", component: Themeisle140 };

export default meta;
type Story = StoryObj<typeof Themeisle140>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
