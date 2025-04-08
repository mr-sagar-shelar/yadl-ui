import type { Meta, StoryObj } from "@storybook/react";
import Themeisle399 from "../Themeisle399";

const meta: Meta<typeof Themeisle399> = { title: "Themeisle/Themeisle399", component: Themeisle399 };

export default meta;
type Story = StoryObj<typeof Themeisle399>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
