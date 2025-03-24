import type { Meta, StoryObj } from "@storybook/react";
import Themeisle460 from "../Themeisle460";

const meta: Meta<typeof Themeisle460> = { title: "Themeisle/Themeisle460", component: Themeisle460 };

export default meta;
type Story = StoryObj<typeof Themeisle460>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
