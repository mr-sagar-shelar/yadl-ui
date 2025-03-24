import type { Meta, StoryObj } from "@storybook/react";
import Themeisle348 from "../Themeisle348";

const meta: Meta<typeof Themeisle348> = { title: "Themeisle/Themeisle348", component: Themeisle348 };

export default meta;
type Story = StoryObj<typeof Themeisle348>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
