import type { Meta, StoryObj } from "@storybook/react";
import Themeisle459 from "../Themeisle459";

const meta: Meta<typeof Themeisle459> = { title: "Themeisle/Themeisle459", component: Themeisle459 };

export default meta;
type Story = StoryObj<typeof Themeisle459>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
