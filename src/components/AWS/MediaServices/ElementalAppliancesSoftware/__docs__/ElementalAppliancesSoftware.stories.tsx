import type { Meta, StoryObj } from "@storybook/react";
import ElementalAppliancesSoftware from "../ElementalAppliancesSoftware";

const meta: Meta<typeof ElementalAppliancesSoftware> = { title: "AWS/MediaServices/ElementalAppliancesSoftware", component: ElementalAppliancesSoftware };

export default meta;
type Story = StoryObj<typeof ElementalAppliancesSoftware>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
