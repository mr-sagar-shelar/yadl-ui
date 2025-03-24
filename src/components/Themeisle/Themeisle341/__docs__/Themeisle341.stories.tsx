import type { Meta, StoryObj } from "@storybook/react";
import Themeisle341 from "../Themeisle341";

const meta: Meta<typeof Themeisle341> = { title: "Themeisle/Themeisle341", component: Themeisle341 };

export default meta;
type Story = StoryObj<typeof Themeisle341>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
